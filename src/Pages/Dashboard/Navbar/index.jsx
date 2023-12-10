import React, { useState, useEffect, useRef } from "react";
import { LogoText } from "../../../components/Logo/index.jsx";
import ExpenseModal from "../../../components/ExpenseModal/index.jsx";

import {
  NavbarWrapper,
  NavbarContainer,
  NavMenu,
  UserCreds,
  Icon,
  UserName,
  PpContainer,
  PpCircle,
  NameFirstLetter,
  Span,
  ArrowIcon,
  NotificationHub,
  Notification,
  NotificationTitle,
  NotificationDescription,
  SectionHeading,
  WarningMsg,
  NotificationControls,
  Control,
  Date,
  Envelope,
  NotificationCount,
} from "./style.jsx";
import moment from "moment";

const NotificationItem = ({
  notification,
  toggleReadStatus,
  deleteNotification,
}) => {
  return (
    <Notification key={notification.id}>
      <NotificationTitle>{notification.title}</NotificationTitle>
      <NotificationDescription>
        {notification.description}
      </NotificationDescription>
      <NotificationControls>
        <Date>{moment.utc(notification.createdAt).format("MMM Do, YYYY")}</Date>
        <Control
          onClick={() => toggleReadStatus(notification.id, notification.isRead)}
        >
          {notification.isRead ? "Mark as unread" : "Mark as read"}
        </Control>
        <Control onClick={() => deleteNotification(notification.id)}>
          Delete
        </Control>
      </NotificationControls>
    </Notification>
  );
};

export const Nav = ({ name, expenses, setExpenses, categories }) => {
  const [isNotificationHubVisible, setIsNotificationHubVisible] =
    useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState([]);
  const [readNotifications, setReadNotifications] = useState([]);

  const notificationHubRef = useRef(null);
  const envelopeIconRef = useRef(null);

  const toggleNotificationHub = () => {
    setIsNotificationHubVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      notificationHubRef.current &&
      !notificationHubRef.current.contains(event.target) &&
      !envelopeIconRef.current.contains(event.target)
    ) {
      setIsNotificationHubVisible(false);
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  async function getNotifications() {
    try {
      // Fetch unread notifications
      const resUnread = await fetch("/api/v1/notifications?isRead=false", {
        method: "GET",
      });
      const unreadData = await resUnread.json();
      setUnreadNotifications(unreadData);

      // Fetch read notifications
      const resRead = await fetch("/api/v1/notifications?isRead=true", {
        method: "GET",
      });
      const readData = await resRead.json();
      setReadNotifications(readData);
    } catch (err) {
      console.error(err.message);
    }
  }

  async function MarkAllAsRead() {
    try {
      const response = await fetch("/api/v1/notifications/read/all", {
        method: "PUT",
      });

      if (response.ok) {
        // Update local state to mark all unread notifications as read
        setUnreadNotifications([]);
        setReadNotifications([...unreadNotifications, ...readNotifications]);
      } else {
        console.error("Failed to mark all notifications as read");
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  async function toggleNotificationReadStatus(id, isRead) {
    try {
      await fetch(`/api/v1/notifications/${id}/toggle-read`, {
        method: "PUT",
      });
      // Refresh notifications lists
      getNotifications();
    } catch (err) {
      console.error(err.message);
    }
  }

  async function deleteNotification(id) {
    try {
      await fetch(`/api/v1/notifications/${id}`, {
        method: "DELETE",
      });
      // Refresh notifications lists
      getNotifications();
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <LogoText />
        <NavMenu>
          {expenses.length === 0 ? (
            <>
              <Span>Add new expense</Span>
              <ArrowIcon className="fas fa-arrow-right fa-xl" />{" "}
            </>
          ) : null}

          <ExpenseModal
            categories={categories}
            setExpenses={setExpenses}
            component={"edit"}
          >
            <Icon className="fas fa-plus" />
          </ExpenseModal>

          <Envelope>
            {!unreadNotifications.length ? null : (
              <NotificationCount>
                {unreadNotifications.length}
              </NotificationCount>
            )}
            <Icon
              ref={envelopeIconRef}
              onClick={toggleNotificationHub}
              className="fa-solid fa-envelope"
            ></Icon>
          </Envelope>
          <UserCreds>
            <UserName>{name}</UserName>
            <PpContainer>
              <PpCircle>
                <NameFirstLetter>{name[0]}</NameFirstLetter>
              </PpCircle>
            </PpContainer>
          </UserCreds>
        </NavMenu>
      </NavbarContainer>
      {isNotificationHubVisible && (
        <NotificationHub ref={notificationHubRef}>
          <NotificationControls>
            <SectionHeading>Unread</SectionHeading>{" "}
            <Control onClick={MarkAllAsRead}>(Mark all as read)</Control>
          </NotificationControls>
          {!unreadNotifications.length ? (
            <WarningMsg>Nothing here yet</WarningMsg>
          ) : (
            unreadNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                toggleReadStatus={toggleNotificationReadStatus}
                deleteNotification={deleteNotification}
              />
            ))
          )}
          <SectionHeading>Read</SectionHeading>
          {!readNotifications.length ? (
            <WarningMsg>Nothing here yet</WarningMsg>
          ) : (
            readNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                toggleReadStatus={toggleNotificationReadStatus}
                deleteNotification={deleteNotification}
              />
            ))
          )}
        </NotificationHub>
      )}
    </NavbarWrapper>
  );
};

export default Nav;

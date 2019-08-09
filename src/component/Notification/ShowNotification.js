import React from 'react'
import NotificationFlyout from './NotificationFlyout'
import Notification from './Notification'
export default function ShowNotification() {
    return (
        <div>
            <NotificationFlyout>
                <Notification>
                    <div>
                        <p>
                            <b>Your subscription expires May 5</b>
                        </p>
                        <p>
                            Maya
                            <br />
                            Media & Entertainment Collection
                            <br />
                            Product Design Collection
                            <br />
                            2 more
                        </p>
                        <p>
                        <a>Manage renewal</a>
                        </p>
                    </div>
                </Notification>
                <Notification>
                    <div>
                        <p>
                            <b>Your subscription expires May 4</b>
                        </p>
                        <p>
                            Maya
                            <br />
                            Media & Entertainment Collection
                            <br />
                            Product Design Collection
                            <br />
                            2 more
                        </p>
                        <p>
                        <a>Manage renewal</a>
                        </p>
                    </div>
                </Notification>
                <Notification>
                    <div>
                        <p>
                            <b>Your subscription expires May 5</b>
                        </p>
                        <p>
                            Maya
                            <br />
                            Media & Entertainment Collection
                            <br />
                            Product Design Collection
                            <br />
                            2 more
                        </p>
                        <p>
                        <a>Manage renewal</a>
                        </p>
                    </div>
                </Notification>
                <Notification>
                    haha
                </Notification>
            </NotificationFlyout>
        </div>
    )
}
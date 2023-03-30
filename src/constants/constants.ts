
interface MenuItemsInterface {
    id : number,
    title : string,
    icon? : string,
    childrens? : MenuItemsInterface [],
    path? : string,
    active? : boolean
}

const menuItems : MenuItemsInterface [] = [
    {    "id" : 1,
        "title": "General",
        "icon": "bi-gear-fill",
        "childrens": [
            {   "id" : 11,
                "title": "Home",
                "icon": "bi-house-fill",
                "path": "/"
            },
            {   "id" : 12,
                "title": "About",
                "icon": "bi-info-circle-fill",
                "path": "/about"
            },
            {    "id" : 13,
                "title": "Contact",
                "icon": "bi-phone-fill",
                "childrens": [
                    {   "id" : 14,
                        "title": "Facebook",
                        "icon": "bi-facebook",
                        "path": "/social"

                    },
                    {   "id" : 15,
                        "title": "Twitter",
                        "icon": "bi-twitter",
                        "path": "/social"

                    },
                    {   "id" : 16,
                        "title": "Instagram",
                        "icon": "bi-instagram",
                        "path": "/social"
                    }
                ]
            },
            {   "id" : 17,
                "title": "FAQ",
                "icon": "bi-question-circle-fill",
                "path": "/faq"

            }
        ]
    },
    {     "id" : 2,
        "title": "Account",
        "icon": "bi-info-circle-fill",
        "childrens": [
            {   "id" : 21,
                "title": "Login",
                "path": "/login"
            },
            {   "id" : 22,
                "title": "Register",
                "path": "/register"
            },
            {   "id" : 23,
                "title": "Forgot Password",
                "path": "/forgot-password"
            },
            {   "id" : 24,
                "title": "Reset Password",
                "path": "/reset-password"
            }
        ]
    },
    {   "id" : 3,
        "title": "Profile",
        "icon": "bi-person-fill",
        "childrens": [
            {"id" : 31,
                "title": "Profile",
                "path": "/profile"
            },
            {"id" : 32,
                "title": "Settings",
                "childrens": [
                    {"id" : 33,
                        "title": "Account",
                        "path": "/settings/account"
                    },
                    {"id" : 34,
                        "title": "Billing",
                        "childrens": [
                            {"id" : 35,
                                "title": "Payment",
                                "path": "/settings/billing/payment"
                            },
                            {"id" : 36,
                                "title": "Subscription",
                                "path": "/settings/billing/subscription"
                            }
                        ]
                    },
                    {"id" : 37,
                        "title": "Notifications",
                        "path": "/settings/notifications"
                    }
                ]
            },
            {"id" : 38,
                "title": "Logout",
                "path": "/logout"
            }
        ]
    },
    {   "id" : 5,
        "title": "Feed",
        "icon": "bi-person-fill",
        "path": "/feed"

    },
]

export { type MenuItemsInterface, menuItems }
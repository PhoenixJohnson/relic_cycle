package com.relic.app.sitedog.service;


import com.relic.app.sitedog.domain.User;
import com.relic.app.sitedog.exception.UserExistsException;

import javax.servlet.http.HttpServletResponse;

/**
 * Created by xiaoj7 on 2015/6/19.
 */
public interface UserService {
    User signup(User user, HttpServletResponse response) throws UserExistsException;
}

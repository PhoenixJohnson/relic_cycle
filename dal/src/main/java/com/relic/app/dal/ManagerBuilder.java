package com.relic.app.dal;

import com.relic.app.dal.manager.Manager;
import com.relic.app.dal.manager.impl.ManagerImpl;

/**
 * Created by vize on 2015/10/31.
 */
public class ManagerBuilder {
    private static String pakName = "com.relic.app.dal";

    public static Manager build(String beanName) throws ClassNotFoundException {
        String fullName = pakName + "." + beanName;
        Class claz = Class.forName(fullName);
        return new ManagerImpl(claz);
    }
}

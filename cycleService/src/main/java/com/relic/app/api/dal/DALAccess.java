package com.relic.app.api.dal;

import com.relic.app.dal.config.DALConfigBean;

/**
 * Created by vizewang on 2015/9/29.
 */
public class DALAccess {
    public static void main(String[] args) {
        System.out.println(DALConfigBean.getInstance().getHost());
    }
}

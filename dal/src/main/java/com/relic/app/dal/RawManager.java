package com.relic.app.dal;

import com.relic.app.dal.beans.Raw;
import com.relic.app.dal.manager.impl.ManagerImpl;

/**
 * Created by vizewang on 2015/9/29.
 */
public class RawManager extends ManagerImpl{
    private static RawManager ourInstance = new RawManager();

    public static RawManager getInstance() {
        return ourInstance;
    }

    private RawManager() {
        super(Raw.class);
    }
}

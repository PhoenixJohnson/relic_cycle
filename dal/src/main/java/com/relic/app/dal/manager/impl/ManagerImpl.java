package com.relic.app.dal.manager.impl;

import com.relic.app.dal.dao.impl.DAOImpl;
import com.relic.app.dal.manager.Manager;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Key;

import java.util.List;

/**
 * Created by vizewang on 2015/9/14.
 */
public class ManagerImpl<T> implements Manager<T> {
    Datastore datastore = null;

    public ManagerImpl(Class<T> tClass) {
        datastore = new DAOImpl().createDatastore(tClass);
    }

    public Key<T> insert(T t) {
        return datastore.save(t);
    }

    public Iterable<Key<T>> insertList(List<T> list) {
        return datastore.save(list);
    }

    public void delete() {
//
    }

    public void update() {

    }

    public void read() {

    }
}

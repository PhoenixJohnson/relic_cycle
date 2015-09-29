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
    private Datastore datastore = null;
    private Class<T> defaultClaz;

    public ManagerImpl(Class<T> tClass) {
        datastore = new DAOImpl().createDatastore(tClass);
        defaultClaz = tClass;
    }

    public Key<T> insert(T t) {
        return datastore.save(t);
    }

    public Iterable<Key<T>> insertList(List<T> list) {
        return datastore.save(list);
    }

    public void delete() {
        datastore.getCollection(defaultClaz).drop();
    }

    public void update() {
//TODO
    }

    public List<T> read() {
        return datastore.find(defaultClaz).asList();
    }
}

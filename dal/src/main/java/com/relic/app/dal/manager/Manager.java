package com.relic.app.dal.manager;

import org.mongodb.morphia.Key;

import java.util.List;

/**
 * Created by vizewang on 2015/9/14.
 */
public interface Manager<T> {
    Key<T> insert(T t);
    Iterable<Key<T>> insertList(List<T> tList);
    void delete();
    void update();
    List<T> read();
}

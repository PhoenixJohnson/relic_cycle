package com.relic.app.dal.dao;

import com.mongodb.MongoClient;
import org.mongodb.morphia.Datastore;

/**
 * Created by vizewang on 2015/9/14.
 */
public interface DAO {
    void setMongoClient(MongoClient mongoClient);
    Datastore  createDatastore(Class clazz);
}

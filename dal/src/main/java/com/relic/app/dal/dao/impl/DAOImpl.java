package com.relic.app.dal.dao.impl;

import com.mongodb.MongoClient;
import com.relic.app.dal.dao.DAO;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

/**
 * Created by vizewang on 2015/9/14.
 */
public class DAOImpl implements DAO {
    private static MongoClient mongoClient=new MongoClient();
    public void setMongoClient(MongoClient mongoClient) {
        this.mongoClient=mongoClient;
    }

    public MongoClient getMongoClient() {
        return mongoClient;
    }

    public Datastore createDatastore(Class clazz) {
        Morphia morphia=new Morphia();
        morphia.mapPackage(clazz.getPackage().getName());
        return morphia.createDatastore(mongoClient,clazz.getSimpleName());
    }
}

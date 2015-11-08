package com.relic.app.cws.repositories;

import com.relic.common.models.Information;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by Phoenix on 15/11/8.
 */
public interface InformationRepo extends MongoRepository<Information, String> {

}

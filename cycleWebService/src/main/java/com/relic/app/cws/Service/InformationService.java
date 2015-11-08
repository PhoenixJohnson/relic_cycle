package com.relic.app.cws.Service;

import com.relic.app.cws.beans.ResponsePackage;
import com.relic.common.models.Information;

import java.util.List;

/**
 * Created by Phoenix on 15/11/8.
 */
public interface InformationService {

    ResponsePackage findAll();

    ResponsePackage findById();

    ResponsePackage saveOne(Information info);

}

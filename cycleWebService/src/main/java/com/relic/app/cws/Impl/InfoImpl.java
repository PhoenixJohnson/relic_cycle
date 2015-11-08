package com.relic.app.cws.Impl;

import com.relic.app.cws.Service.InformationService;
import com.relic.app.cws.beans.ResponsePackage;
import com.relic.app.cws.repositories.InformationRepo;
import com.relic.common.models.Information;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Phoenix on 15/11/8.
 */
@Component
public class InfoImpl implements InformationService {


    @Autowired
    private InformationRepo informationRepo;

    @Override
    public ResponsePackage findAll() {

        ResponsePackage rp = new ResponsePackage();
        List<Object> is = new ArrayList<Object>(informationRepo.findAll());
        rp.setData(is);
        rp.setSuccess(true);

        return rp;
    }

    @Override
    public ResponsePackage findById() {
        return null;
    }

    @Override
    public ResponsePackage saveOne(Information info) {
        ResponsePackage rp = new ResponsePackage();
        this.informationRepo.save(info);
        rp.setSuccess(true);
        return rp;
    }
}

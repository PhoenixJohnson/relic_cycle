package com.relic.app.cws.controller;

import com.relic.app.cws.Service.InformationService;
import com.relic.app.cws.beans.ResponsePackage;
import com.relic.app.cws.repositories.InformationRepo;
import com.relic.com.relic.enumbers.InfoType;
import com.relic.common.models.Information;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.UUID;


@Controller
@RequestMapping("/cws")
public class CWSInfoController {

    @Autowired
    InformationService is;

    @RequestMapping(value = "/api/getInformationAll", method = RequestMethod.GET)
    public
    @ResponseBody
    ResponsePackage getInformation(String requestWarp) {

        return is.findAll();
//        return new ResponsePackage();
    }

    @RequestMapping(value = "/api/saveInformation", method = RequestMethod.GET)
    public
    @ResponseBody
    ResponsePackage saveInformation(String requestWarp) {
        is.saveOne(new Information(new ObjectId(), InfoType.AU, UUID.randomUUID().toString()));
        return new ResponsePackage();
    }


}

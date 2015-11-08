package com.relic.app.cws.controller;

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


@Controller
@RequestMapping("/cws")
public class CwsUserController {


    @RequestMapping(value = "/api/user", method = RequestMethod.POST)
    public
    @ResponseBody
    ResponsePackage getInformation(@RequestParam(value = "name", required = false, defaultValue = "Stranger") String requestWarp) {

        return new ResponsePackage();
    }

}

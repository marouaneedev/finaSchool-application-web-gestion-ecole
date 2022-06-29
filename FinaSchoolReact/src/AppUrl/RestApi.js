// import React, { Component } from 'react'
import axios from 'axios';

 class ResetApi {
  
    static GetRequest=(getUrl)=>{
        return axios.get(getUrl).then(response=>{
            return response.data;
        }).catch(error=>{
            return 'null';
        });
        
    }
}

export default ResetApi
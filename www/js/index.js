/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    //get the default accelerometer:
    //navigator.accelerometer.getCurrentAcceleration(onSuccess , onError);
    //for updating at regular intervals:
    var options = {frequency: 3000}
    navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    function onSuccess(acc){
        document.getElementById("x-axis").value = acc.x;
        document.getElementById("y-axis").value = acc.y;
        document.getElementById("z-axis").value = acc.z;
    }
    function onError(params){

    }
}

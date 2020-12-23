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
    //Note:- To use the myFunction() method, i had to change 'unsafe-eval' to 'unsafe-inline' in meta tag in Content Security Policy!
    //And also we have to paste myFunction() method outside onDeviceReady() method to run using the inline method tags!
    //To avoid this, we will use this event listener method:
    document.getElementById('addButton').addEventListener('click', myFunction);
    function myFunction() {
        var one = document.getElementById('first').value;
        var two = document.getElementById('second').value;
        var sum = 0;
        sum = Number(one) + Number(two); 
        document.getElementById('data').innerHTML=sum;
        }
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready'); 
}

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Form , Text } from 'informed'
import * as Yup from 'yup'; 

// Style
import './index.scss'

export function SignupForm() {
  // var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime(); // Setup gapi

  // const onFormSubmit = (submissionValues) => {
  //   console.log(submissionValues)
  //   const params = {
  //     // The ID of the spreadsheet to update.
  //     spreadsheetId: process.env.REACT_APP_SPREADSHEET_ID,
  //     // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
  //     range: 'Sheet1', //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
  //     // How the input data should be interpreted.
  //     valueInputOption: 'RAW', //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
  //     // How the input data should be inserted.
  //     insertDataOption: 'INSERT_ROWS', //Choose OVERWRITE OR INSERT_ROWS
  //   };

  //   const valueRangeBody = {
  //     'majorDimension': 'ROWS', //log each entry as a new row (vs column)
  //     'values': [submissionValues] //convert the object's values to an array
  //   };

  //   let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
  //   request.then(function (response) {
  //     // TODO: Insert desired response behaviour on submission
  //     console.log(response.result);
  //   }, function (reason) {
  //     console.error('error: ' + reason.result.error.message);
  //   });
  // }

  // const initClient = () => {
  //   gapi.client.init({
  //     'apiKey': process.env.REACT_APP_GOOGLE_API_KEY,
  //     'clientId': process.env.REACT_APP_GOOGLE_CLIENT_ID,
  //     'scope': process.env.REACT_APP_SCOPE,
  //     'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  //   })
  // }

  // const updateSheetValues = () => {
  //   fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}:append`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       //update this token with yours. 
  //       Authorization: `Bearer ${ACCESS_TOKEN}`,
  //     },
  //     body: JSON.stringify({

  //       "requests": [
  //         {
  //           "updateCells": {
  //             "range": {
  //               "startRowIndex": 0,
  //               "startColumnIndex": 0,
  //               "endColumnIndex": 1,
  //               "endRowIndex": 3,
  //               "sheetId": 0
  //             },
  //             " ": [
  //               {
  //                 "values": [
  //                   {
  //                     "userEnteredValue": {
  //                       "stringValue": "Adnan1"
  //                     }
  //                   }
  //                 ]
  //               },
  //               {
  //                 "values": [
  //                   {
  //                     "userEnteredValue": {
  //                       "stringValue": "Adnan2"
  //                     }
  //                   }
  //                 ]
  //               },
  //               {
  //                 "values": [
  //                   {
  //                     "userEnteredValue": {
  //                       "stringValue": "Adnan3"
  //                     }
  //                   }
  //                 ]
  //               }
  //             ],
  //             "fields": "*"
  //           }
  //         }
  //       ]

  //     })
  //   })
  // }

  return (
      <div className="signup">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf3ZjBlV1YmI18Hodq903y3DP7zKJCC30AnARI75Xet6XELQg/viewform?embedded=true" width="100%" height="1082" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
  );
}
const scriptProperty = PropertiesService.getScriptProperties();
const SLACK_URL = scriptProperty.getProperty("SLACK_URL");
const TITLE = scriptProperty.getProperty("TITLE");

// https://developers.google.com/apps-script/guides/triggers/events
interface IFormEvent {
    authMode: GoogleAppsScript.Script.AuthMode;
    response: GoogleAppsScript.Forms.FormResponse;
    source: GoogleAppsScript.Forms.Form;
    triggerUid: string;
}

interface IAttachment {
    title?: string;
    pretext?: string;
    text: string;
}

function sendToSlack(url: string, data: {}) {
    UrlFetchApp.fetch(url, {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify(data)
    });
}

function onFormSubmit(e: IFormEvent) {
    const formResponse = e.response;
    const itemReponses = formResponse.getItemResponses();
    const attachments: IAttachment[] = [];

    itemReponses.forEach(itemResponse => {
        const title = itemResponse.getItem().getTitle();
        const response = itemResponse.getResponse();
        attachments.push({
            title,
            text: response.toString()
        })
    });

    sendToSlack(SLACK_URL, {
        text: TITLE,
        attachments
    })
}
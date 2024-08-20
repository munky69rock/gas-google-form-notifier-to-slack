const scriptProperty = PropertiesService.getScriptProperties();
const SLACK_URL = scriptProperty.getProperty("SLACK_URL");
const TITLE = scriptProperty.getProperty("TITLE");

// https://developers.google.com/apps-script/guides/triggers/events
interface FormEvent {
  authMode: GoogleAppsScript.Script.AuthMode;
  response: GoogleAppsScript.Forms.FormResponse;
  source: GoogleAppsScript.Forms.Form;
  triggerUid: string;
}

interface Attachment {
  title?: string;
  pretext?: string;
  text: string;
}

function sendToSlack(
  url: string,
  data: { text: string; attachments: Attachment[] },
) {
  UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(data),
  });
}

function onFormSubmit(e: FormEvent) {
  const formResponse = e.response;
  const itemResponses = formResponse.getItemResponses();
  const attachments: Attachment[] = [];

  itemResponses.forEach((itemResponse) => {
    const title = itemResponse.getItem().getTitle();
    const response = itemResponse.getResponse();
    attachments.push({
      title,
      text: response.toString(),
    });
  });

  if (!SLACK_URL) throw new Error(`SLACK_URL is not set`);
  if (!TITLE) throw new Error(`TITLE is not set`);

  sendToSlack(SLACK_URL, {
    text: TITLE,
    attachments,
  });
}

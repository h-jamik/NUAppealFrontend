declare var Notification: any;

export class Noty {
  public static notify(title: string, text: string, link?: string): void {
    console.log(link);
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    } else {
       new Notification(title, {
        icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
        body: text,
      }).onclick = function () {
        if (!(!link)) {
          window.open(link);
        }
        else {
          window.open('/');
        }
      };
    }

  }
}

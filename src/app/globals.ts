declare var Notification: any;

export class Noty {
  public static notify(title: string, text: string, link?: string): void {
    console.log(link);
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    } else {
       new Notification(title, {
        icon: '../assets/img/noty_icon.png',
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

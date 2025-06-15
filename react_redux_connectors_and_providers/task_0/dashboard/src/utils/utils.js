// Return the current year
export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Holberton School.';
    }
    else {
        return 'Holberton School main dashboard';
    }
}export function getFullYear() {
    return new Date().getFullYear();
  }
  
  export function getFooterCopy(isIndex) {
    let msg;
  
    if (isIndex) {
      msg = "Holberton School";
    } else {
      msg = "Holberton School main dashboard";
    }
  
    return msg;
  }
  
  export function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD";
  }

export function getLatestNotification() {
    return {__html: '<strong>Urgent requirement</strong> - complete by EOD'};
}
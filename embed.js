require(["jquery","s-chat-support"], function($,sChat) {

    "use strict";

    $(function() {

      sChat.init('ph52Li6AkoWrmqgag', {
          ssl: true,
          welcomeMessage: 'Hi, how can I help you?',
          hostName: '45f89e4d.ngrok.io',
          labels: {
              sendPlaceholder: 'Send the message...',
              headerTitle: 'Welcome on my website!'
          }
      });

    });
});

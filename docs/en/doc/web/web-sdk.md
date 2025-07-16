---
outline: deep
---

# VBot Web SDK

JavaScript SDK that helps customers integrate VBot into their website.

## Connection

```JAVASCRIPT
// Initialize client
// access_token: User token
var client = await VBotClient(access_token);

// Connect to the VBot server
client.connect()
```

## Listen for account connection events

```JAVASCRIPT
// CONNECTING = 'connecting',
// CONNECTED = 'connected',
// RECOVERING = 'recovering',
// DISCONNECTING = 'disconnecting',
// DISCONNECTED = 'disconnected'

client.on('statusUpdate', function (status) {
    logger.info(`Account status changed to ${status}`);
});
```

## Retrieve hotline list

```JAVASCRIPT
const hotlines = await client.getHotlines();
```

## Make a call

```JAVASCRIPT
try {
	// Initiate a call
	// phoneNumber: Phone number to call
	// hotlineNumber: Hotline number
	const session = await client.invite(phoneNumber, hotlineNumber).catch(logger.error);

	session.on('progressUpdate', response => {
    	if (response.message.statusCode === 180) {
        // Web plays its custom ringtone

      	} else if (response.message.statusCode === 183) {
    		// Play carrier's early media
        	session.sessionSetDescription(response.message.body).catch(exception => {
				session.terminate({
            	statusCode: 488,
            	reason_phrase: 'Bad Media Description'
          		});
        	});
      	}
    });

	if (!session) {
 	   return;
	}

	// Show calling progress
	// showOutgoingCallProgressHub();

	let { accepted, rejectCause } = await session.accepted(); // Wait until the call is picked up
	if (!accepted) {
		// Show call rejection screen
    	// showCallRejectedScreen(rejectCause);
    	return;
	}

	// Show call screen
	// showCallScreen();

	// Call ended
	await session.terminated(); // Wait until the call is terminated
} catch (e) {
	logger.error(e);
}
```

## Listen for incoming call events

```JAVASCRIPT
client.on('invite', (session) => {
	try {
		// Ringing
    	ringer();

		// Wait for user to answer
    	let { accepted, rejectCause } = await session.accepted();
    	if (!accepted) {
    		return;
    	}
		// Stop ringing
		// Show call screen
    	// showCallScreen();

		// Call ended
    	await session.terminated(); // Wait until the call is terminated
  	} catch (e) {
    	logger.error(e);
  	} finally {
		// Close call screen
    	// closeCallScreen();
  	}
});
```

## Listen for call events

```JAVASCRIPT
// TRYING = 'trying',
// RINGING = 'ringing',
// ACTIVE = 'active',
// ON_HOLD = 'on_hold',
// TERMINATED = 'terminated'
this.session.on('statusUpdate', function (status) {
    logger.info(`Call status changed to ${status}`);
});
```

## Actions during a call

```JAVASCRIPT
// Get phone number of the ongoing call
this.session.phoneNumber;

// Accept an incoming call
await this.session.accept();

// Reject an incoming call
await this.session.reject();

// End a call
await this.session.terminate();

// Cancel an outgoing call
await this.session.cancel();

// Hold a call
await this.session.hold();

// Unhold a call
await this.session.unhold();

// Mute input audio
this.session.media.input.muted = !this.session.media.input.muted;

// Send DTMF
this.session.dtmf(dataset.key);

// Change I/O devices
client.defaultMedia.output.id = 'device output id';
client.defaultMedia.input.id = 'device input id';

// Change I/O devices for a call
this.session.media.input.volume = 80;
this.session.media.input.audioProcessing = false;
this.session.media.input.muted = true;
this.session.media.output.muted = false;
this.session.media.setInput({
  id: 'device input id',
  audioProcessing: true,
  volume: 0.8,
  muted: false
});
```

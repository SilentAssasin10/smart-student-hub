/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
import functions from 'firebase-functions';
import cors from 'cors';
import axios from 'axios';

export const groqProxy = functions.https.onRequest
((req, res) => {
  cors(req, res, async () => {
    try {
      const apiKey = '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'; // 🔒 Replace securely in production

      const response = await axios.post(
        'https://api.groq.com/openai/v1/chat/completions',
        req.body,
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      res.status(200).send(response.data);
    } catch (err) {
      console.error('Groq API error:', err.message);
      res.status(500).send({ error: 'Groq request failed' });
    }
  });
});

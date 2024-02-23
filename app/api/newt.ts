import 'server-only'
import { createClient } from 'newt-client-js'

if(!process.env.NEWT_SPACE_UID || !process.env.NEWT_CDN_API_TOKEN) {
    throw new Error('Please set NEWT_SPACE_UID and NEWT_CDN_API_TOKEN in your .env file')
}

export const newtClient = createClient({
  spaceUid: process.env.NEWT_SPACE_UID,
  token: process.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
})

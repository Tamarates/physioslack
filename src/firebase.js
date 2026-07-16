import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyAEBtIIDNPB0USQuFZf1WUqsJMvf6yUYEY',
  authDomain: 'physioslack-6cb9e.firebaseapp.com',
  projectId: 'physioslack-6cb9e',
  storageBucket: 'physioslack-6cb9e.firebasestorage.app',
  messagingSenderId: '325598942265',
  appId: '1:325598942265:web:be6f5bd1aee2d5007729e8',
  measurementId: 'G-Y87T43WER8'
}

export const firebaseApp = initializeApp(firebaseConfig)

let analyticsInstance = null

export const analyticsReady = isSupported()
  .then((supported) => {
    if (supported) {
      analyticsInstance = getAnalytics(firebaseApp)
    }
    return analyticsInstance
  })
  .catch(() => null)

export function trackPageView(path, title) {
  if (!analyticsInstance) return
  logEvent(analyticsInstance, 'page_view', {
    page_path: path,
    page_title: title
  })
}

import { FirebaseApp, getApp } from 'firebase/app'
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  Auth,
  User,
  UserCredential,
} from 'firebase/auth'

class AuthService {
  auth: Auth

  constructor(firebaseApp: FirebaseApp) {
    this.auth = getAuth(firebaseApp)
  }

  waitForUser(callback: (user: User | null) => void) {
    return onAuthStateChanged(this.auth, (user) => {
      callback(user)
    })
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((userCredentials: UserCredential) => {
        return {
          user: userCredentials.user,
          error: null,
        }
      })
      .catch((err) => {
        return {
          user: null,
          error: err.message,
        }
      })
  }

  async logout() {
    await signOut(this.auth)
  }
}

export default new AuthService(getApp())

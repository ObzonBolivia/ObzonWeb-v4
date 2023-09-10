import React, { useState, useMemo, useContext } from 'react'

const UserContext = React.createContext()

export function UserProvider({ children }) {
	// Data de un usuario proveido por FIREBASE AUTHENTICATION
	const [user, setUser] = useState({
		"apiKey": "AIzaSyAvAE932To1LPwo3nDu3CvVy-F_DtTnZeg",
		"authDomain": "obzonbolivia-177c2.firebaseapp.com",
		"appName": "[DEFAULT]",
		"currentUser": {
			"uid": "kVLgYKvifQapEz2C6OY9cwXI3bo1",
			"email": "tester123@gmail.com",
			"emailVerified": false,
			"isAnonymous": false,
			"providerData": [
				{
					"providerId": "password",
					"uid": "tester123@gmail.com",
					"displayName": null,
					"email": "tester123@gmail.com",
					"phoneNumber": null,
					"photoURL": null
				}
			],
			"stsTokenManager": {
				"refreshToken": "AMf-vBxKWYEyVnLvKhvL01WltOZfu4n9gFckfx3y6AJUeq9KOgSNRkYlmMDBiq41kLz3ahGvaxzixtgqvVzHBqwVBaR9RM_mWNg0nEZso6gyMyDnZ3wjH27eMUqE5-5uWV-i-FIUl7uVNN_Aepst9FywT64BbP-U2_G0BJPcug0DY7YdTBGwm8E9a_uYj52zRXxrGTXmZeGebmhA56IxZFelfAE5QgsJqg",
				"accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE5MGFkMTE4YTk0MGFkYzlmMmY1Mzc2YjM1MjkyZmVkZThjMmQwZWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vb2J6b25ib2xpdmlhLTE3N2MyIiwiYXVkIjoib2J6b25ib2xpdmlhLTE3N2MyIiwiYXV0aF90aW1lIjoxNjk0MzI0MjA3LCJ1c2VyX2lkIjoia1ZMZ1lLdmlmUWFwRXoyQzZPWTljd1hJM2JvMSIsInN1YiI6ImtWTGdZS3ZpZlFhcEV6MkM2T1k5Y3dYSTNibzEiLCJpYXQiOjE2OTQzMjQyMDcsImV4cCI6MTY5NDMyNzgwNywiZW1haWwiOiJ0ZXN0ZXIxMjNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3RlcjEyM0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Z14T361oRNFUNnmLKOL0XfFWJARkagKzQVbmoPjZUlAi5Fz2O2GjahhCZ04HQs4FjwAO3BnryQwDYXY5BzkSbQ8021bTLOg7sjevBfmGXh11e06u9lLNM6-A5ASejv_T7cA0HpALYzfs8ju0UvZJAujjtLQSapw-KfuqyGZI2l88O9aQ-LoUsvoIIMc6qU4iaBKXmnY-bguHihrlg7gQeQRpEkwDor1aaUXiUKOJLooM8yCctEtpX6Q5ocx4vc3H0B47oSsM04JHgnU7KrjznTLaQmHnFe7dtxqYWCsJQWR_N7RZnp7-XyH1hVRYc5vzNOkiFaZAdFSrnoI0b1tYnw",
				"expirationTime": 1694327807873
			},
			"createdAt": "1684268531053",
			"lastLoginAt": "1694324207736",
			"apiKey": "AIzaSyAvAE932To1LPwo3nDu3CvVy-F_DtTnZeg",
			"appName": "[DEFAULT]"
		}
	})
	// Data de un usuario proveido por FIREBASE DATABASE
	const [userDB, setUserDB] = useState('loading')
	const [success, setSuccess] = useState(null)
	const [image, setImage] = useState({})
	const [numeration, setNumeration] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 24, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 21, 27, 39, 40, 41])
	const [pageOne, setPageOne] = useState(true);
	const [pageTwo, setPageTwo] = useState(true);
	const [pageThree, setPageThree] = useState(true);
	const [pageQR, setPageQR] = useState(true);
	const [qr, setQr] = useState('swoou.com');
	const [uuid, setUuid] = useState([])

const [userImage, setUserImage] = useState({})
	const [dataUrl, setDataUrl] = useState('');
	const [templates, setTemplates] = useState([
		[
		  'h', 'h', 'h',
		  'h', 'v', 'h',
		  'h', 'v', 'h'],
		[
		  'h', 'h', 'h',
		  'h', 'v', 'h',
		  'h', 'h', 'h'],
		[
		  'h', 'h', 'v',
		  'v', 'h', 'h',
		  'v', 'h', 'h'],
		[
		  'v', 'v', 'v',
		  'v', 'v', 'v',
		  'v',  ],
		[
			'v', 
			'h', 'v',
		],
		])

	function setUserProfile(userProfile) {
		setUser(userProfile)
	}
	function setUserData(userDatabase) {
		setUserDB(userDatabase)
	}
	function setAlbunImage(data) {
		setImage(data)
	}
	function setAlbunImage(data) {
		setImage(data)
	}
	function setAlbunNumeration(data) {
		setNumeration(data)
	}
	function setUserSuccess(mode) {
		setSuccess(mode)
		setTimeout(() => { setSuccess(null) }, 6000)
	}
	// function handlerPageView(data, create) {
	// 	switch (data) {
	// 		case 'pageOne':
	// 			create == true ? setPageOne(true) : setPageOne(false)
	// 		  break;
	// 		case 'pageTwo':
	// 			create == true ? setPageOne(true) : setPageOne(false)
	// 		  break;
	// 		case 'pageThree':
	// 			create == true ? setPageOne(true) : setPageOne(false)
	// 		  break;
	// 		  case 'pageQR':
	// 			create == true ? setPageQR(true) : setPageQR(false)
	// 		  break;
	// 		default:
	// 		  break;
	// 	  }
	// }


	const value = useMemo(() => {
		return ({
			user,
			userDB,
			success,
			image,
			numeration,
			pageOne,
			pageTwo,
			pageThree,
			templates,
			qr, userImage,
			
			dataUrl,
			uuid,
			setUserProfile,
			setUserData,
			setUserSuccess,
			setAlbunImage,
			setAlbunNumeration,
			setQr,
			setDataUrl,
			setUuid, setUserImage
		})
	}, [user, userDB, success, image, numeration, pageOne, pageTwo, pageThree, qr, dataUrl, uuid, userImage])

	return (
		<UserContext.Provider value={value} >
			{children}
		</UserContext.Provider>
	)
}

export function useUser() {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('error')
	}
	return context
}

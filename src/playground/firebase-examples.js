import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, remove, update, onValue, get, off, push, onChildRemoved, onChildChanged, onChildAdded } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    databaseURL: "https://expensify-app-ok-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

const db = getDatabase();


// function writeUserData(userId) {
//     // set(ref(db, 'users/' + userId), {
//     //   username: 'Olesia-' + userId,
//     // });
//     set(ref(db, 'user'), {
//       name: 'Olesia Kazanivska',
//       age: 27,
//       isSingle: false,
//       job: {
//           title: 'Software developer',
//           company: 'Leobit'
//       },
//       location: {
//           city: 'Lviv',
//           country: 'Ukraine'
//       },
//         stressLevel: 6,
//     }).then(() => {
//         console.log('Data is saved')
//     }).catch((e) => {
//         console.log('this failed', e)
//     });
//   }

//   function writeUserAttributes() {
//     set(ref(db, 'attributes'), {
//       height: 73,
//       weight: 150
//     }).then(() => {
//         console.log('Second set call worked')
//     }).catch((e) => {
//         console.log('Things didnt for the second error', e)
//     });
//   }

//   function removeUserAttributes() {
//     // set(ref(db, 'attributes/height'), null).then(() => {
//     remove(ref(db, 'attributes/height')).then(() => {
//         console.log('Data was removed')
//     }).catch((e) => {
//         console.log('Did not remove data', e)
//     });
//   }

//   function updateUserAttributes() {
//     update(ref(db, 'user'), {
//         name: 'Nelly',
//         stressLevel: 9,
//         'job/company': 'Google',
//         'location/city': 'Rivne'
//     }).then(() => {
//         console.log('Data was updated')
//     }).catch((e) => {
//         console.log('Did not update data', e)
//     });
//   }

//   function fetchUserAttributes() {
//     // onValue(ref(db, 'user'), (snapshot) => {
//     //     const data = snapshot.val();
//     //     console.log('Data was fetched: ', data)
//     // })
//     get(ref(db, 'user')).then((snapshot) => {
//         if (snapshot.exists()) {
//           console.log('Fetched data: ', snapshot.val());
//         } else {
//           console.log("No data available");
//         }
//       }).catch((error) => {
//         console.error('Did not fetch data:', error);
//       })
//   }

// writeUserData(Math.floor(Math.random() * 5000))
// writeUserAttributes()
// removeUserAttributes()
// updateUserAttributes()
// fetchUserAttributes()

//REAL LIFE CHANGES

// const onValueChange = onValue(ref(db, 'user'), (snapshot) => {
//     const data = snapshot.val();
//     console.log('Data was fetched: ', data)
// })

// setTimeout(() => {
//     set(ref(db, 'user/age'), 25)
// }, 3500)

// setTimeout(() => {
//     onValueChange()
// }, 7000)

// setTimeout(() => {
//     set(ref(db, 'user/age'), 30)
// }, 10500)

// const onDescriptionChange = onValue(ref(db, 'user'), (snapshot) => {
//     const user = snapshot.val();
//     console.log(`${user.name} is ${user.job.title} at ${user.job.company}`)
// })


// EXPENSES

// const key1 = push(ref(db, 'expenses'), {
//     description: 'Rent bill',
//     note: '',
//     amount: 22000,
//     createdAt: 7587595979876
// }).key
// const key2 = push(ref(db, 'expenses'), {
//     description: 'Phone bill',
//     note: '',
//     amount: 5900,
//     createdAt: 7587595979876
// }).key
// const key3 = push(ref(db, 'expenses'), {
//     description: 'Food bill',
//     note: '',
//     amount: 1000,
//     createdAt: 7587595979876
// }).key

// console.log('keys', key1, key2, key3)

// get(ref(db, 'expenses')).then((snapshot) => {
//     if (snapshot.exists()) {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ... childSnapshot.val()
//             })
//         })
//       console.log('expenses: ', expenses);
//     } else {
//       console.log("No data available");
//     }
//   }).catch((error) => {
//     console.error('Did not fetch data:', error);
//   })

// onValue(ref(db, 'expenses'), (snapshot) => {
//     if (snapshot.exists()) {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ... childSnapshot.val()
//             })
//         })
//         console.log('expenses: ', expenses);
//     } else {
//         console.log("No data available");
//     }
// })

// onChildRemoved(ref(db, 'expenses'), (data) => {
//     console.log('removed child', data.key)
// })

// onChildChanged(ref(db, 'expenses'), (data) => {
//     console.log('changed child', data.key)
// })

// onChildAdded(ref(db, 'expenses'), (data) => {
//     console.log('added child', data.key)
// })
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { AngularFireAuth } from '@angular/fire/compat/auth'; 
import { Router } from '@angular/router';
import { User } from 'firebase/auth'; 

interface UserData {
  email: string;
  fullName: string;
  createdAt: any; 
}

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {
  email: string = '';
  fullName: string = '';
  createdAt: any;
  userData: UserData | undefined;  
  userDoc: any;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {}


  async loadUserProfile() {
    const user = await this.afAuth.currentUser; 
    if (user) {
      const userRef = this.afs.collection('users').doc(user.uid);
      userRef.get().subscribe((doc) => {
        if (doc.exists) {
          this.userData = doc.data() as UserData;  
          this.email = this.userData.email;
          this.fullName = this.userData.fullName;
          this.createdAt = this.userData.createdAt;
        } else {
          console.log('Nenhum dado encontrado para esse usuário');
        }
      });
    }
  }

 
  editProfile() {
    this.router.navigate(['/edit-profile']); 
  }

  ngOnInit() {
    this.loadUserProfile();  
  }
}

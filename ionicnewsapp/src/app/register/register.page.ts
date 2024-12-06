import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  fullName: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,  
    private router: Router
  ) {}

  async register() {
    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      console.log('Usuário registrado com sucesso:', userCredential);

      await this.afs.collection('users').doc(userCredential.user?.uid).set({
        email: this.email,
        fullName: this.fullName,
        createdAt: new Date(),
      });

      alert('Registro bem-sucedido');
      this.router.navigate(['/login']); 
    } catch (error) {
      console.error('Erro ao registrar:', error);
      if (error instanceof Error) {
        alert('Erro no cadastro: ' + error.message);
      } else {
        alert('Erro desconhecido.');
      }
    }
  }
}

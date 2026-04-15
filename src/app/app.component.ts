import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Add your actual phone number here (with country code, no +)
  phoneNumber = '254791660162'; 

  products = [
    { id: 1, name: 'Golden Abaya', price: '5,500 KES', img: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=500' },
    { id: 2, name: 'Silk Hijab', price: '1,200 KES', img: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=500' },
    { id: 3, name: 'Tote Bag', price: '500 KES', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=500' },
    { id: 4, name: 'Classic Black Abaya', price: '6,000 KES', img: 'https://images.unsplash.com/photo-1560012753-48098c772b7a?q=80&w=500' }
  ];

  order(name: string) {
    const msg = encodeURIComponent(`Assalamu Alaikum! I'd like to order the ${name}.`);
    window.open(`https://wa.me/${this.phoneNumber}?text=${msg}`, '_blank');
  }
}
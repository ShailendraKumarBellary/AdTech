import { Component, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core'; // Added ViewChild, ElementRef, AfterViewChecked
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

@Component({
  selector: 'app-ai-chatbox',
  standalone: true,
  imports: [CommonModule, FormsModule, MatProgressSpinnerModule],
  templateUrl: './ai-chatbox.component.html',
  styleUrl: './ai-chatbox.component.css'
})
export class AIChatboxComponent implements AfterViewChecked {
  // Grab a reference to the scroll container element from the HTML template
  @ViewChild('scrollContainer') private myScrollContainer!: ElementRef;

  newMessage: string = '';
  messages: Message[] = [
    { text: 'Hello! How can I help you today?', sender: 'bot', timestamp: new Date() }
  ];
  
  @Input() sessionId: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient) { }

  // Angular lifecycle hook that runs whenever the template checks for updates (e.g., new messages appended)
  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

  sendMessage() {
    if (!this.newMessage.trim() || this.loading) return;

    const userQueryText = this.newMessage;
    this.messages.push({
      text: userQueryText,
      sender: 'user',
      timestamp: new Date()
    });

    this.newMessage = '';
    this.loading = true;

    const payload = {
      sessionId: this.sessionId,
      question: userQueryText,
      keyword: userQueryText
    };

    this.http.post('https://localhost:44328/api/AI/Search', payload)
      .subscribe({
        next: (res: any) => {
          let rawContent = '';
          if (res?.choices?.[0]?.message?.content) {
            rawContent = res.choices[0].message.content;
          } else if (typeof res === 'string') {
            rawContent = res;
          }

          if (rawContent) {
            this.messages.push({
              text: rawContent,
              sender: 'bot',
              timestamp: new Date()
            });
            sessionStorage.setItem('chatHistory', JSON.stringify(this.messages));
          }
        },
        error: (err) => {
          this.messages.push({
            text: 'An error occurred while reaching the AdTech backend. Please try again.',
            sender: 'bot',
            timestamp: new Date()
          });
        },
        complete: () => {
          this.loading = false;
        }
      });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { EnquiriesService } from 'src/app/views/enquiries/enquiries.service';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { Router } from '@angular/router';  // Import Router for navigation

interface Enquiry {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dialingCode: string;
  phoneNumber: string;
  message: string;
  // Add other fields as needed
}
interface EnquiryResponse {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  data: Enquiry[];
}
@Component({
  selector: 'app-enquiries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enquiries.component.html',
  styleUrl: './enquiries.component.scss'
})
@Injectable({
  providedIn: 'root'
})
export class EnquiriesComponent implements OnInit {
   enquiries: Enquiry[] = [];
   selectedEnquiry: Enquiry | null = null;
  //enquiries: any;


  ngOnInit(): void {
   this.getAll();
  }

  constructor(private http: HttpClient,
    private enquiryService: EnquiriesService,
    private router: Router
  ) { }
getAll(){
  this.enquiryService.getAllEnquiries().subscribe((response: EnquiryResponse) => {
    this.enquiries = response.data;
    console.log("response ......",this.enquiries)
  })
}
viewEnquiry(enquiryId: number){
  this.router.navigate([`/enquiries/${enquiryId}`]);
}
deleteEnquiry(enquiryId: number) {
  if (confirm("Are you sure you want to delete this enquiry?")) {
    this.enquiryService.deleteEnquiry(enquiryId.toString()).subscribe(() => {
      this.enquiries = this.enquiries.filter(enquiry => enquiry.id !== enquiryId);
      console.log("Enquiry deleted");
    });
  }
}
openModal(enquiryId: number): void {
  this.enquiryService.getSingleEnquiry(enquiryId.toString()).subscribe((data: Enquiry) => {
    this.selectedEnquiry = data;
  });
}
closeModal(): void {
  this.selectedEnquiry = null;
}

}


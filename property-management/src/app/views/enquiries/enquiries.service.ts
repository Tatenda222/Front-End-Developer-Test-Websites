
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiriesService {

  private baseUrl = 'https://fsboafrica.com/api/enquiries';

  constructor(private http: HttpClient) { }

  getAllEnquiries(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getSingleEnquiry(enquiryId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-single/${enquiryId}`);
  }

  deleteEnquiry(enquiryId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${enquiryId}`);
  }
}

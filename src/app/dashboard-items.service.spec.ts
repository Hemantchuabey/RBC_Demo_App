import { TestBed } from '@angular/core/testing';
import { DashboardItemsService } from './dashboard-items.service';

describe('DashboardItemsService', () => {
  let service: DashboardItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

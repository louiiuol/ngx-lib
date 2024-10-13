import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FileService } from 'src/app/services/file/file.service';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;
  let fileService: jasmine.SpyObj<FileService>;

  beforeEach(async () => {
    const fileServiceSpy = jasmine.createSpyObj('FileService', ['getSVG']);

    await TestBed.configureTestingModule({
      imports: [IconComponent],
      providers: [{ provide: FileService, useValue: fileServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fileService = TestBed.inject(FileService) as jasmine.SpyObj<FileService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set default values for inputs', () => {
    expect(component.alt()).toBe('icon');
    expect(component.size()).toBe('1.5rem');
    expect(component.aspectRatio()).toBe('1 / 1');
    expect(component.color()).toBe('currentColor');
  });

  it('should call fileService.getSVG with the correct path', () => {
    const svgContent = '<svg></svg>';
    fileService.getSVG.and.returnValue(
      of(svgContent as unknown as SVGSVGElement),
    );
    fixture.componentRef.setInput('name', 'test-icon');

    fixture.detectChanges();

    expect(fileService.getSVG).toHaveBeenCalledWith('/icons/test-icon.svg');
  });
});

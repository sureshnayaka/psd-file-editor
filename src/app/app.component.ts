import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Editor } from '@pixlrlte/pixlr-sdk';
import { async } from 'rxjs';
import { createToken } from './toekn.server';



@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
	isDialogOpen: boolean = false;
	imageId: any;
	base64: any;
	constructor() { }
	@ViewChild('photopea') iframe!: ElementRef<HTMLIFrameElement>;
	images = [
		{
			id: 1,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/text.psd/ik-thumbnail.jpg?updatedAt=1733151089162",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/text.psd",
			name: "Text.psd"
		},
		{
			id: 2,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/vector-shapes.psd/ik-thumbnail.jpg?updatedAt=1733166411739",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/vector-shapes.psd",
			name: "Vector.psd"
		},
		{
			id: 3,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/multi-value-items.psd/ik-thumbnail.jpg?updatedAt=1733166418816",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/multi-value-items.psd",
			name: "Multi value.psd"

		},
		{
			id: 4,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/Business-Social-Media-Banner-19.psd/ik-thumbnail.jpg?updatedAt=1733211688471",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/Business-Social-Media-Banner-19.psd",
			name: "Media.psd"

		},
		{
			id: 5,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/Travel-Social-Media-Banner-25.psd/ik-thumbnail.jpg?updatedAt=1733211567124",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/Travel-Social-Media-Banner-25.psd",
			name: "Social.psd"

		},
		{
			id: 6,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/multi-value-items.psd/ik-thumbnail.jpg?updatedAt=1733166418816",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/multi-value-items.psd",
			name: "Multi.psd"

		},
		{
			id: 7,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/multi-value-items.psd/ik-thumbnail.jpg?updatedAt=1733166418816",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/multi-value-items.psd",
			name: "Value.psd"

		},
		{
			id: 8,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/Business-Social-Media-Banner-19.psd/ik-thumbnail.jpg?updatedAt=1733211688471",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/Business-Social-Media-Banner-19.psd",
			name: "Banner.psd"

		},
		{
			id: 9,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/Travel-Social-Media-Banner-25.psd/ik-thumbnail.jpg?updatedAt=1733211567124",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/Travel-Social-Media-Banner-25.psd",
			name: "Media.psd"

		},
		{
			id: 10,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/multi-value-items.psd/ik-thumbnail.jpg?updatedAt=1733166418816",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/multi-value-items.psd",
			name: "Items.psd"

		},
		{
			id: 11,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/Travel-Social-Media-Banner-25.psd/ik-thumbnail.jpg?updatedAt=1733211567124",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/Travel-Social-Media-Banner-25.psd",
			name: "Media.psd"

		},
		{
			id: 12,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/multi-value-items.psd/ik-thumbnail.jpg?updatedAt=1733166418816",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/multi-value-items.psd",
			name: "Text.psd"

		},
		{
			id: 13,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/multi-value-items.psd/ik-thumbnail.jpg?updatedAt=1733166418816",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/multi-value-items.psd",
			name: "Value.psd"

		},
		{
			id: 14,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/Business-Social-Media-Banner-19.psd/ik-thumbnail.jpg?updatedAt=1733211688471",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/Business-Social-Media-Banner-19.psd",
			name: "Social Media.psd"

		},
		{
			id: 16,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/multi-value-items.psd/ik-thumbnail.jpg?updatedAt=1733166418816",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/multi-value-items.psd",
			name: "Multi Value.psd"

		},
		{
			id: 15,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/Travel-Social-Media-Banner-25.psd/ik-thumbnail.jpg?updatedAt=1733211567124",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/Travel-Social-Media-Banner-25.psd",
			name: "Social Banner.psd"

		},
		{
			id: 18,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/multi-value-items.psd/ik-thumbnail.jpg?updatedAt=1733166418816",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/multi-value-items.psd",
			name: "Multi Value.psd"

		},

		{
			id: 17,
			previewURL: "https://ik.imagekit.io/qfrd7efkf/Travel-Social-Media-Banner-25.psd/ik-thumbnail.jpg?updatedAt=1733211567124",
			imageURL: "https://ik.imagekit.io/qfrd7efkf/Travel-Social-Media-Banner-25.psd",
			name: "Social Banner.psd"

		},
	];

	onEdit(image: any): void {
		this.isDialogOpen = true;
		setTimeout(() => {
			this.wnd = this.iframe.nativeElement.contentWindow;
			console.error(this.wnd);
			if (this.wnd) {
				window.addEventListener('message', this.onMessage.bind(this));
				this.wnd.postMessage('app.open("' + image.imageURL + '", null, true);', "*");
				this.imageId = image.id

			} else {
				console.error('contentWindow is still undefined after iframe load.');
			}
		}, 2000);
	}

	onCard(image: any) {
		this.imageId = image.id
	}

	async closeDialog() {
		if (this.wnd) {
			this.wnd.postMessage('app.activeDocument.saveToOE("jpg");', "*");
		}
		setTimeout(() => {
			this.isDialogOpen = false;

		}, 1000);
	}

	layerCount: number = 0;
	inter: any = 0;
	wnd: Window | null = null;

	ngOnInit(): void {

	}
	async ngAfterViewInit(): Promise<void> {


	}
	arrayBufferToBase64(buffer: ArrayBuffer): string {
		let binary = '';
		const bytes = new Uint8Array(buffer);
		for (let i = 0; i < bytes.byteLength; i++) {
			binary += String.fromCharCode(bytes[i]);
		}
		return btoa(binary);
	}

	onMessage(event: MessageEvent): void {
		if (typeof event.data === 'string' && event.data.startsWith('layerCount=')) {
			const count = parseInt(event.data.slice('layerCount='.length), 10);
			if (count !== this.layerCount) {
				this.layerCount = count;
				clearInterval(this.inter);
				this.inter = 0;
				if (this.wnd) {
					this.wnd.postMessage("app.activeDocument.activeLayer.translate(20,20);", "*");
				}
			}
		} else if (event.data instanceof ArrayBuffer) {
			const base64 = this.arrayBufferToBase64(event.data);
			console.log(base64); // Outputs base64 string
			this.base64 = "data:image/jpeg;base64," + base64;
			this.updatePreviewURL(this.imageId, this.base64);


		}
	}

	updatePreviewURL(id: number, newPreviewURL: string) {
		const image = this.images.find(img => img.id === id);  // Find the image with the specified id

		if (image) {
			image.previewURL = newPreviewURL;  // Update the previewURL
			console.log(`Updated previewURL for image with id ${id}:`, image);
		} else {
			console.error(`Image with id ${id} not found.`);
		}
	}

	buttonClick(): void {
		// if (this.inter !== 0) return;
		if (this.wnd) {
			this.wnd.postMessage('app.open("https://ik.imagekit.io/qfrd7efkf/text.psd", null, true);', "*");
		}
	}

	save(): void {
		if (this.wnd) {
			this.wnd.postMessage('app.activeDocument.saveToOE("jpg");', "*");
		}

	}


}

**⚠️ Deprecation Notice**  
NPM package was moved to main repo of [Video Effects SDK](https://github.com/EffectsSDK/video-effects-sdk-web)

# Video Effects SDK - NPM Package Usage

Add real-time AI video enhancement that makes video meeting experience more effective and comfortable to your application in a few hours. 

Introducing our powerful and advanced web SDK for video communication products. With our web SDK, you can now elevate your video conferencing experience with features like background blur, virtual background, auto-framing or smart zoom, beautification, and automatic color correction.

Our background blur feature helps you maintain your privacy and professionalism during video calls by blurring out the background behind you. Virtual background takes it one step further by allowing you to replace your real background with a custom image or video of your choice.

With our auto-framing or smart zoom feature, you no longer have to worry about staying in frame during your video calls. Our SDK automatically adjusts the camera's field of view to keep you centered in the frame, even if you move around.

Our beautification feature enhances your appearance during video calls by smoothing out skin tones, removing blemishes, and adjusting lighting to create a more polished look. This feature is perfect for those who want to boost their confidence and create a professional appearance.

Finally, our automatic color correction feature adjusts the camera's color settings to improve the overall image quality, even in low-light environments or with poor quality cameras.

Overall, our web SDK is the perfect solution for those looking to take their video conferencing experience to the next level. With advanced features like background blur, virtual background, auto-framing or smart zoom, beautification, and automatic color correction, you can create a professional and polished appearance during your video calls. Try our web SDK today and elevate your video conferencing experience.

Explore our Chrome Extension, built upon this Web SDK. You can effortlessly test all features and compatibility with your application without any integration hassle:

[![Watch the video](https://img.youtube.com/vi/KHBk3qwP2_I/hqdefault.jpg)](https://www.youtube.com/embed/KHBk3qwP2_I)

## Requirements

- Obtaining Effects SDK Customer ID
- SSL to get MediaStream from browser
- Support of WebGL 2.0

## Instalation

```
npm install effects-sdk
```

## Usage

```
import { tsvb } from 'effects-sdk';

const sdk = new tsvb('{CUSTOMER_ID}');

//versions of wasm files should be matched with SDK version
 sdk.config({
          wasmPaths: { 
                   'ort-wasm.wasm': 'https://effectssdk.ai/sdk/web/3.4.3/ort-wasm.wasm',
                   'ort-wasm-simd.wasm': 'https://effectssdk.ai/sdk/web/3.4.3/ort-wasm-simd.wasm'
               }
        });

```

## Documentation
- [API Reference](https://effectssdk.ai/sdk/web/docs/classes/tsvb.html)
- [Feature Usage](https://github.com/EffectsSDK/web-integration-sample/blob/main/docs/Features-Usage-Examples.md)
- [Best Practices](https://github.com/EffectsSDK/web-integration-sample/blob/main/docs/Best-Practices.md)

## Demo
[Live Demo](https://effectssdk.ai/sdk/demo)

## Chrome extension for end customers
[AI Webcam Visual Effects: Google Meet & Other](https://chromewebstore.google.com/detail/ai-webcam-visual-effects/iedbphhbpflhgpihkcceocomcdnemcbj)


For the best **quality** - disable **Frame Skipping** and use **Quality** segmentation preset

For the best **performance** – enable **Frame Skipping** and use **Lightning** segmentation preset

Most common usage - disabled **Frame Skipping** and use **Balanced** segmentation preset

## Obtaining Effects SDK Customer ID
Effects SDK Customer ID is required to get SDK working.

To receive a new trial Customer ID please fill in the contact form on [effectssdk.ai](https://effectssdk.ai/request-trial) website.

## Technical Details

- CUSTOMER_ID should be provided to the SDK constructor.
- SDK has 4 speed/quality presets (different segmentationn models).
- To improve output FPS SDK has ability to skip the frames.
- [Self Hosted Assets](https://github.com/EffectsSDK/web-integration-sample/blob/main/docs/Self-Hosted-Assets.md)
- [License Server for On-Premises Solutions](https://github.com/EffectsSDK/web-integration-sample/blob/main/docs/License-Server-for-On-Premises-Solutions.md)

## Features

- Virtual backgrounds (put image or video as a background) - **implemented**
- Use Desktop Capture as a background - **implemented**
- Background blur - **implemented**
- Beautification/Touch up my appearance - **implemented**
- Auto framing - **implemented**
- Auto color correction - **implemented**
- Layouts - **implemented**
- One basic Lower-Third - **implemented**
- Overlays - **implemented**
- New Lower-Thirds (5) - **implemented**
- Color filters - **implemented**
- Low-light Correction - **implemented**
- Video clarity/Sharpness - **implemented**

// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;

#define uWaveFront 0.2
#define uWaveLength 0.1
#define uWaveFreq 100.0
#define uWaveHeight 0.15

void main(void) {
    vec2 center = vec2(0.5);

    float d = distance(vTextureCoord, center);
    float distToFront = distance(d, uWaveFront);

    float h = sin(d * uWaveFreq) * 0.5 + 0.5;

    float w = smoothstep(uWaveLength, 0.0, distToFront);
    w *= h * uWaveHeight;
    
    gl_FragColor = vec4(vec3(w), 1.0);
}
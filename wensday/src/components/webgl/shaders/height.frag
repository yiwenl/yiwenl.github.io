// copy.frag

#define NUM ${NUM}

precision highp float;
varying vec2 vTextureCoord;
uniform vec2 uCenter[NUM];
uniform vec3 uWave[NUM];
uniform float uSeed;
uniform float uTime;

#define uWaveFreq 150.0

void main(void) {

    float t = uTime;
    float w = 0.0;
    vec2 uv = vTextureCoord;

    for(int i=0; i<NUM; i++) {
        vec2 center = uCenter[i];
        vec3 wave = uWave[i];

        float uWaveFront = wave.x;
        float uWaveHeight = 0.15 * wave.y;
        float uWaveLength = 0.05 * wave.z;
        float d = distance(uv, center);
        float distToFront = distance(d, uWaveFront);

        float h = cos(distToFront * uWaveFreq) * 0.5 + 0.5;

        float tw = smoothstep(uWaveLength, 0.0, distToFront);
        tw *= h * uWaveHeight;

        w += tw;
        // w = max(w, tw);
    }

    
    gl_FragColor = vec4(vec3(w), 1.0);
}
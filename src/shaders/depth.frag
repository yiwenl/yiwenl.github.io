// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
uniform float near;
uniform float far;
varying float vDepth;

float getDepth(float z, float n, float f) {
	return (2.0 * n) / (f + n - z*(f-n));
}

void main(void) {
	float d = getDepth(vDepth, near, far);
	d = 1.0 - d;
    gl_FragColor = vec4(vec3(d), 1.0);
}
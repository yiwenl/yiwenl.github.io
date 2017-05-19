// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform sampler2D texture;

varying vec2 vTextureCoord;
varying vec2 vScreenUV;
varying vec3 vNormal;
varying float vDepth;

void main(void) {

	float h = texture2D(texture, aTextureCoord).r * 2.0;
	vec3 position = aVertexPosition;
	position.y += h;
    vec4 V = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(position, 1.0);

    vScreenUV = V.xy / V.w * 0.5 + 0.5;
    gl_Position = V;
    vDepth = V.z/V.w;
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;
}
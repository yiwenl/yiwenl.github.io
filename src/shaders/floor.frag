// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
varying vec2 vScreenUV;
uniform sampler2D texture;
uniform sampler2D colorMap;


vec3 blendOverlay(vec3 base, vec3 blend) {
    return mix(1.0 - 2.0 * (1.0 - base) * (1.0 - blend), 2.0 * base * blend, step(base, vec3(0.5)));
}

void main(void) {

	float d = distance(vTextureCoord, vec2(.5));
	d = smoothstep(0.5, 0.0, d);
	d = mix(d, 1.0, .5);

	vec4 color = vec4(vec3(d), 1.0);
	float colorHeight = texture2D(texture, vTextureCoord).r;

	color -= colorHeight * 0.15;

	vec3 colorMap = texture2D(colorMap, vScreenUV).rgb;
	color.rgb = blendOverlay(color.rgb, colorMap);

    gl_FragColor = color;
}
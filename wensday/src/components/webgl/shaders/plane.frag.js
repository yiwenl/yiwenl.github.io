export default `
// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uTextMap;
uniform sampler2D uNormalMap;
uniform sampler2D uHeightMap;

float diffuse(vec3 n, vec3 l) {
  float d = dot(normalize(n), normalize(l));
  return max(d, 0.0);
}

float diffuse(vec3 n, vec3 l, float t) {
  float d = dot(normalize(n), normalize(l));
  return mix(1.0, max(d, 0.0), t);
}

#define LIGHT vec3(1.0, 0.8, 0.6)

#define COLOR_BG vec3(245.0/255.0)

void main(void) {
    vec3 N = texture2D(uNormalMap, vTextureCoord).rgb;
    float h = texture2D(uHeightMap, vTextureCoord).r;
    float d = diffuse(N, LIGHT, .5) + 0.2;

    float off = h * 0.05;
    vec2 uv = vTextureCoord;
    uv.xy += N.xz * 0.01;

    float r = texture2D(uTextMap, uv + vec2(-off, 0.0)).r;
    float g = texture2D(uTextMap, uv ).g;
    float b = texture2D(uTextMap, uv + vec2(off, 0.0)).b;

    vec3 color = vec3(r, g, b);
    color *= d;

    color = mix(color, COLOR_BG, .8);
    color = mix(color, COLOR_BG, vTextureCoord.y);
    gl_FragColor = vec4(color, 1.0);
}
`;

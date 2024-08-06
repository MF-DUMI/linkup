import __nuxt_component_0 from "./index-CNtANDG5.js";
import { ref, mergeProps, unref, useSSRContext, withCtx, isRef, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrRenderList } from "vue/server-renderer";
import { d as defineStore } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "./index-DMqtYQSF.js";
import "@unhead/shared";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
import "@vue/devtools-api";
import "destr";
import "klona";
const useUserStore = defineStore("user", {
  state: () => ({
    posts: [],
    isMenuOverlay: false,
    isLogoutOverlay: false
  })
});
const _sfc_main$2 = {
  __name: "Post",
  __ssrInlineRender: true,
  props: { post: Object },
  emits: ["isDeleted"],
  setup(__props, { emit: __emit }) {
    useUserStore();
    let isMenu = ref(false);
    ref(false);
    let isDeleting = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "z-50 bottom-0 h-full w-full" }, _attrs))}><div class="py-2 w-full"><div class="flex items-center justify-between"><div class="flex items-center text-white"><img class="rounded-full h-[35px]"${ssrRenderAttr("src", __props.post.image)}><div class="ml-2 font-semibold text-[18px]">${ssrInterpolate(__props.post.name)}</div><div class="relative"><button${ssrIncludeBooleanAttr(unref(isDeleting)) ? " disabled" : ""} class="${ssrRenderClass([unref(isMenu) ? "bg-gray-800" : "", "flex items-center text-white p-1 h-[24px] w-[24px] hover:bg-gray-800 rounded-full cursor-pointer"])}">`);
      if (!unref(isDeleting)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: " bi:three-dots",
          color: "#ffffff",
          size: "18"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "eos-icons:bubble-loading",
          color: "#ffffff",
          size: "18"
        }, null, _parent));
      }
      _push(`</button></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Post.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/threads-logo.png");
const _sfc_main$1 = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  setup(__props) {
    useUserStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "MainLayout",
        class: "h-screen"
      }, _attrs))}><div class="w-full max-w-[500px] mx-auto"><div id="TopMenu" class="w-full flex items-center justify-center px-2 h-10 my-2"><img class="w-[35px]"${ssrRenderAttr("src", _imports_0)}></div></div><div class="flex w-full max-w-[500px] mx-auto h-screen">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div id="BottomNav" class="fixed z-50 bottom-0 flex w-full h-[70px] border-t border-t-gray-700 bg-black"><div class="flex w-full max-w-[500px] mx-auto flex items-center justify-around"><button class="w-full h-full">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols:home-outline",
        size: "35",
        color: "#ffffff"
      }, null, _parent));
      _push(`</button><button class="w-full h-full">`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "mb-1",
        name: "material-symbols:edit-square-outline-rounded",
        size: "32",
        color: "#ffffff"
      }, null, _parent));
      _push(`</button><button class="w-full h-full">`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "mb-1",
        name: "ph:sign-out",
        size: "32",
        color: "#ffffff"
      }, null, _parent));
      _push(`</button></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/MainLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useUserStore();
    let posts = ref([]);
    let isPosts = ref(true);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Post = _sfc_main$2;
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div id="IndexPage" class="w-full overflow-auto"${_scopeId}><div class="mx-auto max-w-[500px] overflow-hidden"${_scopeId}><div id="Posts" class="px-4 max-w-[600px] mx-auto"${_scopeId}>`);
            if (unref(isPosts)) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(posts), (post) => {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Post, {
                  post,
                  onIsDeleted: ($event) => isRef(posts) ? posts.value = [] : posts = []
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", {
                id: "IndexPage",
                class: "w-full overflow-auto"
              }, [
                createVNode("div", { class: "mx-auto max-w-[500px] overflow-hidden" }, [
                  createVNode("div", {
                    id: "Posts",
                    class: "px-4 max-w-[600px] mx-auto"
                  }, [
                    unref(isPosts) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(posts), (post) => {
                      return openBlock(), createBlock("div", { key: post }, [
                        createVNode(_component_Post, {
                          post,
                          onIsDeleted: ($event) => isRef(posts) ? posts.value = [] : posts = []
                        }, null, 8, ["post", "onIsDeleted"])
                      ]);
                    }), 128)) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Cqy16vTs.js.map

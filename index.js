< script type = "text/javascript" >
  // 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1630477231.961453
  ! function(n, r, e, t, c) {
    var i, o = "Promise" in n,
      u = {
        then: function() {
          return u
        },
        catch: function(n) {
          return n(new Error("Airship SDK Error: Unsupported browser")), u
        }
      },
      s = o ? new Promise((function(n, r) {
        i = function(e, t) {
          e ? r(e) : n(t)
        }
      })) : u;
    s._async_setup = function(n) {
      if (o) try {
        i(null, n(c))
      } catch (n) {
        i(n)
      }
    }, n[t] = s;
    var a = r.createElement("script");
    a.src = e, a.async = !0, a.id = "_uasdk",
      a.rel = t, r.head.appendChild(a)
  }(window, document, 'https://aswpsdkeu.com/notify/v1/ua-sdk.min.js',
    'UA', {
      vapidPublicKey: 'BLJpsCE9cWW4MzKEXMBQ3P1YRM_g_kF6k7LQrQUrMds0PAUqFb9JTfDIP2E1tiYtlSSRXAMudY6achuKqr3x3Yk=',
      appKey: 'Vm0ghpyrThqyjaCf5NV4cg',
      token: 'MTpWbTBnaHB5clRocXlqYUNmNU5WNGNnOlhXUHk4dzNHa2k2Mnk1M2U1bTI4aF9SMnVqNTU5MHU4NG94YlBGOFA2aFU'
    });

<
/script>
